import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'SQL', 'PHP'];

const App = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showSchool, setShowSchool] = useState(false);

  const handleSkillsClick = () => {
    setShowSkills(!showSkills);
  };

  const handleSchoolClick = () => {
    setShowSchool(!showSchool);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.name}>Kevin Bell</Text>
      <Text>I am a student at Davis Technical College, studying Software Development. My goal is to become a full-stack developer.</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.buttonContainer}>
          <Button onPress={handleSkillsClick} title={showSkills ? 'Hide Skills' : 'See Skills'} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleSchoolClick} title={showSchool ? 'Hide School' : 'See School'} />
        </View>
      </View>
      {showSkills && (
        <View style={styles.skills}>
          {skills.map((skill, index) => (
            <Text key={index}>{skill}</Text>
          ))}
        </View>
      )}
      {showSchool && (
        <View>
          <Text style={styles.school}>Davis Technical College</Text>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/bell-kevin/about_me_web_app/main/dtc.jpg?token=GHSAT0AAAAAAB7O4WGZQ4O6SRLHFUKTIRWKZAKTX7A'
            }}
            style={styles.image}
          />
          <Text style={styles.address}>550 East 300 South</Text>
          <Text style={styles.city}>Kaysville, Utah, United States of America 84037</Text>
          <Text style={styles.phone}>801-593-2500</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10
  },
  image: {
    width: 300,
    height: 200,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  school: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  address: {
    textAlign: 'center',
  },
  city: {
    textAlign: 'center',
  },
  phone: {
    textAlign: 'center',
  },
  skills: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
