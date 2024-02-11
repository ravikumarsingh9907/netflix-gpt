import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: GPT_API_KEY,
    dangerouslyAllowBrowser: true
});

const getSearchResult = async (content) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: content }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0]?.message?.content;
}


export default getSearchResult;