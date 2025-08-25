import { UserPreferences } from '../contexts/UserContext';
import { GeneratedSong } from '../contexts/AudioContext';

// Local music files available in the Music directory
const localMusicFiles = [
  {
    id: 'uptown-funk',
    title: 'Uptown Funk',
    filename: 'Uptown-Funk.mp3',
    artist: 'Mark Ronson ft. Bruno Mars',
    genre: 'pop'
  },
  {
    id: 'track-12',
    title: 'Track 12',
    filename: '12Track1222_vbr.mp3',
    artist: 'Unknown Artist',
    genre: 'electronic'
  },
  {
    id: 'love-the-way-you-lie',
    title: 'Love the Way You Lie',
    filename: 'Eminem_Ft_Rihanna_-_Love_the_Way_You_Lie_Offblogmedia.com.mp3',
    artist: 'Eminem ft. Rihanna',
    genre: 'hiphop'
  },
  {
    id: 'chasing-cars',
    title: 'Chasing Cars',
    filename: 'Tommee_Profitt_-_Chasing_Cars_CeeNaija.com_.mp3',
    artist: 'Tommee Profitt',
    genre: 'pop'
  },
  {
    id: 'thinking-out-loud',
    title: 'Thinking Out Loud',
    filename: 'Thinking-Out-Loud.mp3',
    artist: 'Ed Sheeran',
    genre: 'pop'
  }
];

// Import car-specific music files for Vite
import toyotaMusic from '../Music/toyota.mp3';
import teslaMusic from '../Music/Tesla.mp3';
import mercedesMusic from '../Music/mercedes.mp3';
import fordMusic from '../Music/ford.mp3';
import bmwMusic from '../Music/bmw.mp3';

// Map car makes to their specific music files
const carMusicAssets: Record<string, string> = {
  'Toyota': toyotaMusic,
  'Tesla': teslaMusic,
  'Mercedes': mercedesMusic,
  'Ford': fordMusic,
  'BMW': bmwMusic
};

// Generate personalized lyrics based on user preferences
const generateLyrics = (preferences: UserPreferences): string => {
  const { name, genre, mood, artist, vibe } = preferences;
  
  let lyrics = `Welcome ${name}, to your car wash experience!\n`;
  lyrics += `Time to shine and make your car pristine\n`;
  
  // Add genre-specific verses
  switch (genre) {
    case 'pop':
      lyrics += `Dancing bubbles, sparkling clean\n`;
      lyrics += `Your car's the star of this pop scene\n`;
      break;
    case 'rock':
      lyrics += `Rev it up, let's rock and roll\n`;
      lyrics += `Cleaning power, that's our goal\n`;
      break;
    case 'electronic':
      lyrics += `Digital wash, synthetic gleam\n`;
      lyrics += `Electronic car wash dream\n`;
      break;
    case 'jazz':
      lyrics += `Smooth and cool, like morning dew\n`;
      lyrics += `Jazz up your ride, make it new\n`;
      break;
    case 'reggae':
      lyrics += `Easy vibes, no need to rush\n`;
      lyrics += `Island time for your car wash\n`;
      break;
    case 'country':
      lyrics += `Down the road, through dust and grime\n`;
      lyrics += `Country clean, every time\n`;
      break;
    case 'hiphop':
      lyrics += `Beat drops hard, suds fly high\n`;
      lyrics += `Hip-hop wash, reach for the sky\n`;
      break;
    case 'classical':
      lyrics += `Symphony of soap and water\n`;
      lyrics += `Classical clean, as it ought to\n`;
      break;
  }
  
  // Add mood-specific content
  if (mood) {
    lyrics += `Feeling ${mood.toLowerCase()}, that's the way\n`;
    lyrics += `Perfect mood for wash day\n`;
  }
  
  // Add vibe-specific content
  if (vibe) {
    lyrics += `${vibe} vibes filling the air\n`;
    lyrics += `Car wash magic everywhere\n`;
  }
  
  // Add artist inspiration if provided
  if (artist) {
    lyrics += `Like ${artist} would sing it true\n`;
    lyrics += `This song's created just for you\n`;
  }
  
  // Chorus
  lyrics += `\nChorus:\n`;
  lyrics += `Wash away the dust and grime\n`;
  lyrics += `Four minutes of musical time\n`;
  lyrics += `${name}, your car will shine so bright\n`;
  lyrics += `Sgt. Clean Car Wash Tunes makes everything right\n`;
  
  // Bridge
  lyrics += `\nBridge:\n`;
  lyrics += `Soap and bubbles, rinse and dry\n`;
  lyrics += `Your car's ready to touch the sky\n`;
  lyrics += `Thanks for choosing Sgt. Clean Car Wash Tunes today\n`;
  lyrics += `Drive away in style, ${name}!\n`;
  
  return lyrics;
};

/**
 * Select car-specific music based on the selected car make
 */
const selectCarSpecificMusic = (preferences: UserPreferences) => {
  // Use car-specific music based on selected car
  if (preferences.selectedCar) {
    const carMake = preferences.selectedCar.make;
    const musicFile = carMusicAssets[carMake];
    
    if (musicFile) {
      return {
        id: `${carMake.toLowerCase()}-music`,
        title: `${carMake} Car Wash Music`,
        filename: `${carMake.toLowerCase()}.mp3`,
        artist: `${carMake} Experience`,
        genre: preferences.genre || 'car-wash',
        audioUrl: musicFile
      };
    }
  }
  
  // Fallback to Toyota if no car selected or car not found
  return {
    id: 'toyota-music',
    title: 'Toyota Car Wash Music',
    filename: 'toyota.mp3',
    artist: 'Toyota Experience',
    genre: preferences.genre || 'car-wash',
    audioUrl: carMusicAssets['Toyota']
  };
};

/**
 * Generate a personalized song by selecting from local music files
 */
export const generateSong = async (preferences: UserPreferences): Promise<GeneratedSong> => {
  try {
    // Simulate a brief loading time for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const selectedMusic = selectCarSpecificMusic(preferences);
    const lyrics = generateLyrics(preferences);
    
    const song: GeneratedSong = {
      id: `car-specific-song-${Date.now()}`,
      title: `${preferences.name}'s ${selectedMusic.title}`,
      audioUrl: selectedMusic.audioUrl,
      duration: 240, // 4 minutes as expected
      personalizedGreeting: `Here's your personalized ${preferences.selectedCar?.make || 'Toyota'} car wash experience, ${preferences.name}!`,
      createdAt: new Date()
    };

    // Record analytics
    await recordAnalytics({
      songSelected: true,
      genre: preferences.genre,
      selectedMusic: selectedMusic.title,
      selectedCar: preferences.selectedCar?.make || 'Toyota',
      hasMood: !!preferences.mood,
      hasArtist: !!preferences.artist,
      hasVibe: !!preferences.vibe,
      duration: 240,
      source: 'car-specific',
      timestamp: new Date().toISOString()
    });

    return song;

  } catch (error) {
    console.error('Error selecting car-specific music:', error);
    
    // Fallback to Toyota music
    return {
      id: `fallback-song-${Date.now()}`,
      title: `${preferences.name}'s Toyota Car Wash Tunes`,
      audioUrl: carMusicAssets['Toyota'],
      duration: 240,
      personalizedGreeting: `Here's your Toyota car wash experience, ${preferences.name}!`,
      createdAt: new Date()
    };
  }
};

/**
 * Record analytics data
 */
export const recordAnalytics = async (data: any): Promise<void> => {
  try {
    console.log('Analytics recorded:', data);
    // In production, send to your analytics backend
  } catch (error) {
    console.error('Error recording analytics:', error);
  }
};

/**
 * Health check for TopMediai API
 */
export const healthCheck = async (): Promise<boolean> => {
  try {
    // This function is no longer relevant as we are using local files
    // Keeping it for now, but it will always return true
    return true;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
};