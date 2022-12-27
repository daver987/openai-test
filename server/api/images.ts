import openai from 'openai'

const apiKey = useRuntimeConfig().OPENAI_API_KEY
const { Configuration, OpenAIApi } = openai
const configuration = new Configuration({ apiKey })
const openAI = new OpenAIApi(configuration)
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { prompt } = body
  const response = await openAI.createImage({
    prompt: prompt,
    n: 1,
    size: '1024x1024',
  })
  console.log(response.data)
  return {
    statusCode: 200,
    response: response.data,
  }
})
