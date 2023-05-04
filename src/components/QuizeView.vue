<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import quiz from "../data/quizes.json";
import Question from "./Question.vue";
import QuizHeader from "./QuizHeader.vue";

const route = useRoute();

const quize = quiz.find((q) => q.id === parseInt(route.params.id));

const currentQuestionIndex = ref(0);

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quize.questions.length}`;
});
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" />
    <div>
      <Question :question="quize.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>

<style scoped></style>
