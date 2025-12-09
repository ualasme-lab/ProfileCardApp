import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const currentTheme = COLORS[theme];
  
  // الجزء 5: منطق التجاوب
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 500;

  // الجزء 4: دالة تبديل السمة
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
      
      {/* زر تبديل السمة */}
      <Pressable
        onPress={toggleTheme}
        style={styles.themeToggle}
      >
        <Ionicons
          name={theme === 'light' ? 'moon' : 'sunny'}
          size={28}
          color={currentTheme.text}
        />
      </Pressable>

      <View style={[
        styles.card,
        { 
          backgroundColor: currentTheme.card,
          // الجزء 5: التنسيقات المتجاوبة
          padding: isLargeScreen ? SPACING.xl : SPACING.lg,
          width: isLargeScreen ? '60%' : '85%',
        }
      ]}>
        
        <Ionicons
          name="person-circle-outline"
          // الجزء 5: حجم الأيقونة المتجاوب
          size={isLargeScreen ? 100 : 80}
          color={currentTheme.text}
        />
        
        <Text style={[styles.name, { color: currentTheme.text }]}>
          أحمد يلمظ
        </Text>
        
        <Text style={[styles.role, { color: currentTheme.text }]}>
          مطور تطبيقات الهاتف المحمول
        </Text>

        {/* زر الإعجاب التفاعلي */}
        <Pressable
          style={({ pressed }) => [
            styles.likeButton,
            { backgroundColor: pressed ? '#e63946' : '#ff6b6b' }
          ]}
          onPress={() => console.log('تم الإعجاب بالملف الشخصي!')}
        >
          <Ionicons name="heart" size={24} color="#fff" />
          <Text style={styles.likeText}>إعجاب</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.sm,
  },
  card: {
    borderRadius: RADII.md,
    alignItems: 'center',
    // الجزء 3: ظلال iOS
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // الجزء 3: ظلال Android
    elevation: 6,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginTop: SPACING.md,
  },
  role: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: SPACING.sm,
    opacity: 0.7,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    marginTop: SPACING.md,
  },
  likeText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },
});