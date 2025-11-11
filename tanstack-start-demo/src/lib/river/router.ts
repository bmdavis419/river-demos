import { createRiverRouter } from "@davis7dotsh/river-core";
import { streamAskQuestion } from "./streams";

export const myRiverRouter = createRiverRouter({
  askQuestion: streamAskQuestion,
});

export type MyRiverRouter = typeof myRiverRouter;
