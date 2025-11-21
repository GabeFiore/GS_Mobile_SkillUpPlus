import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#00C4CC', //azul
  background: '#121212', // preto
  card: '#282828', // cinza 
  text: '#FFFFFF', // branco
  textSecondary: '#C3C3C3', // cinza claro
  success: '#31F300', // verde
  danger: '#FF4500', // laranja 
  border: '#333333', 
};

export const Typography = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary, 
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  small: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
});

export const Layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12, 
    padding: 20,
    marginBottom: 15,
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: Colors.card,
    fontWeight: '700',
    fontSize: 18,
  },
});
