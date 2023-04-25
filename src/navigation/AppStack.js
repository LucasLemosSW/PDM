import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Preload from '../screens/Preload';
import Students from '../screens/Students';
import Student from '../screens/Student';
import Courses from '../screens/Courses';
import Course from '../screens/Course';
import Users from '../screens/Users';
import User from '../screens/User';
import {COLORS} from '../assets/colors';

const Stack = createStackNavigator();
export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={preloadStyle}
        />
        <Stack.Screen
          name="Alunos"
          component={Students}
          options={alunosStyle}
        />
        <Stack.Screen name="Aluno" component={Student} options={alunoStyle} />
        <Stack.Screen name="Cursos" component={Courses} options={cursosStyle} />
        <Stack.Screen name="Curso" component={Course} options={cursoStyle} />
        <Stack.Screen name="Usuarios" component={Users} options={usersStyle} />
        <Stack.Screen name="Usuario" component={User} options={userStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const preloadStyle = {
  headerShown: false,
};

const alunosStyle = {
  title: 'Alunos',
};

const alunoStyle = {
  title: 'Aluno',
};

const cursosStyle = {
  title: 'Cursos',
};

const cursoStyle = {
  title: 'Cursos',
};

const usersStyle = {
  title: 'Usuários',
};

const userStyle = {
  title: 'Usuário',
};
