package routes

import (
	"net/http"
	"task-management/utils"

	"github.com/gin-gonic/gin"
)

func AIEndpoints(router *gin.Engine) {
	router.GET("/ai/suggest-task", func(c *gin.Context) {
		prompt := c.Query("prompt")
		if prompt == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Prompt is required"})
			return
		}

		suggestion, err := utils.GenerateAITask(prompt)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate AI suggestion"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"suggestion": suggestion})
	})
}
