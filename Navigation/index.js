/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/components/App';
import { name as appName } from './app.json';
import {setupDataBase} from './src/core/config'
setupDataBase()
AppRegistry.registerComponent(appName, () => App);
