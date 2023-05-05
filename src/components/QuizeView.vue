<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import quiz from "../data/quizes.json";
import Question from "./Question.vue";
import QuizHeader from "./QuizHeader.vue";
import Result from "./Result.vue";

const route = useRoute();

const quize = quiz.find((q) => q.id === parseInt(route.params.id));

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quize.questions.length}`;
});

const barPercentage = computed(() => {
  return `${(currentQuestionIndex.value / quize.questions.length) * 100}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quize.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question
        v-if="!showResults"
        :question="quize.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result
        v-else
        :quezQuestionLength="quize.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>

<style scoped></style>
