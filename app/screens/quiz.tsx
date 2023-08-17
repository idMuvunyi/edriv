import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import quizData from '../data';
import Button from '../components/Button';
import {appColor} from '../theme/colors';
import * as Progress from 'react-native-progress';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Countdown timer in seconds
  const [progress, setProgress] = useState(0);

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

  // console.log(currentQuestion + 1 / quizData.length);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.contentContainer}>
        <View style={styles.counterTimerStyle}>
          <Text style={{...styles.timerText, color: appColor.primary.hard}}>
            {currentQuestion + 1} / {quizData.length}
          </Text>
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{timeLeft} secs </Text>
            {/* <Text style={styles.timerText}>{score}</Text> */}
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Progress.Bar
            progress={progress}
            width={Dimensions.get('screen').width - 48}
            height={7}
            color={appColor.secondary.hard}
          />
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
            isDisabled={currentQuestion === 0}
            title="Garuka"
            bgColor={appColor.primary.hard}
            bgOnPress={appColor.primary.light}
            onPress={() => {
              setCurrentQuestion(currentQuestion - 1);
              setProgress(currentQuestion - 1 / quizData.length);
            }}
          />

          <Button
            title={currentQuestion + 1 === quizData.length ? 'Soza' : 'Komeza'}
            bgColor={appColor.primary.hard}
            bgOnPress={appColor.primary.light}
            onPress={() => {
              if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setProgress(currentQuestion + 1 / quizData.length);
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
    backgroundColor: 'white',
  },
  contentContainer: {
    margin: 24,
  },
  timerContainer: {
    backgroundColor: appColor.yellow.light,
    borderRadius: 50,
    width: Dimensions.get('screen').width / 2,
    alignItems: 'center',
    paddingVertical: 10,
  },
  counterTimerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerText: {
    fontSize: 16,
    color: appColor.yellow.hard,
    fontFamily: 'Inter-SemiBold',
  },
  questionText: {
    fontSize: 18,
    color: appColor.primary.hard,
    fontFamily: 'Inter-SemiBold',
    marginTop: 25,
  },
  questionsContainer: {
    backgroundColor: '#f8f9fa',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ECF0F1',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
