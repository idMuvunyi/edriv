import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import quizData from '../data';
import Button from '../components/Button';
import {appColor} from '../theme/colors';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Countdown timer in seconds

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
      // Handle end of quiz (show modal / screen for results )
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        // Handle timeout
        console.log('You time is up, now closed the quiz');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Igihe Kibura: {timeLeft} secs </Text>
          <Text style={styles.timerText}>{score}</Text>
        </View>
        <Text style={styles.questionText}>{`${currentQuestion + 1}. ${
          quizData[currentQuestion].question
        }`}</Text>
        <View style={styles.questionsContainer}>
          {quizData[currentQuestion].options.map(option => (
            <TouchableOpacity key={option} onPress={() => handleAnswer(option)}>
              <Text
                style={{
                  ...styles.questionText,
                  fontSize: 16,
                  marginTop: 7,
                  fontFamily: 'Inter-Regular',
                }}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Garuka"
            onPress={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
              }
            }}
          />
          <Button
            title="Komeza"
            onPress={() => {
              if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    margin: 24,
  },
  timerContainer: {
    backgroundColor: appColor.yellow.light,
    borderRadius: 50,
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
  timerText: {
    fontSize: 16,
    color: appColor.yellow.hard,
    fontFamily: 'Inter-SemiBold',
  },
  questionText: {
    fontSize: 18,
    color: appColor.black.hard,
    fontFamily: 'Inter-SemiBold',
    marginTop: 20,
  },
  questionsContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: appColor.primary.light,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
