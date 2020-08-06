import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator>
    <Screen name="TeacherList" component={TeacherList} />
    <Screen name="Favorites" component={Favorites} />
  </Navigator>
);

export default StudyTabs;
