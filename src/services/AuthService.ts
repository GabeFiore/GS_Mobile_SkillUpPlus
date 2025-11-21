import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@SkillUpPlus:user';

export interface User {
  username: string;
  token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<User> => {
  if (username === 'global' && password.length > 0) {
    const user: User = { username, token: 'token-teste-12345' }; //token simulado
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  }
  throw new Error('Usuário ou senha inválidos.');
};

export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem(USER_KEY);
};

export const getStoredUser = async (): Promise<User | null> => {
  const userJson = await AsyncStorage.getItem(USER_KEY);
  if (userJson) {
    return JSON.parse(userJson) as User;
  }
  return null;
};
