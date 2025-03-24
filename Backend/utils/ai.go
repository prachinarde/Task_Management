package utils

import (
	"context"
	"os"

	"github.com/sashabaranov/go-openai"
)

// Generate AI Task Suggestion
func GenerateAITask(prompt string) (string, error) {
	client := openai.NewClient(os.Getenv("OPENAI_API_KEY"))

	resp, err := client.CreateChatCompletion(
		context.TODO(),
		openai.ChatCompletionRequest{
			Model: "gpt-4",
			Messages: []openai.ChatCompletionMessage{
				{Role: "system", Content: "You are an AI assistant providing task suggestions."},
				{Role: "user", Content: prompt},
			},
		},
	)
	if err != nil {
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}
