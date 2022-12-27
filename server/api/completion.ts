import openai from 'openai'

const apiKey = useRuntimeConfig().OPENAI_API_KEY
const { Configuration, OpenAIApi } = openai
const configuration = new Configuration({ apiKey })
const openAI = new OpenAIApi(configuration)
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { prompt, maxTokens, temperature } = body
  const response = await openAI.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: temperature,
    max_tokens: maxTokens,
  })
  console.log(response.data)
  return {
    statusCode: 200,
    response: response.data,
  }
})
