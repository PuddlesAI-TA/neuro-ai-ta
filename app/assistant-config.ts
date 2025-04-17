export let assistantId = "asst_VHvJrtWbUPqKNrdCYpP58gzh"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
