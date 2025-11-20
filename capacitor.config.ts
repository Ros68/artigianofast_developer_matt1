import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.projectpro.app',
  appName: 'ProjectPro',
  webDir: 'dist/public',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
  server: {
    androidScheme: 'https',
    cleartext: false,
    allowNavigation: ['*'],
    // Remove url to use bundled assets in production
    // API calls will use https://artigianofast.com via mobileApi.ts
    // url: 'https://artigianofast.com' // Uncomment for remote server mode
  }
};

export default config;
