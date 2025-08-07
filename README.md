
# GroceryScout

An AI-powered grocery shopping website that helps users discover recipes and ingredients.

## Features

- Browse grocery products by category
- Search functionality for finding specific products
- AI-powered recipe assistant (powered by Gemini)
- Shopping cart functionality
- Responsive design for all device sizes
- Recipe saving capabilities

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Zustand for state management
- Gemini API for AI-powered recipe generation

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Update the Gemini API key in `src/services/geminiService.ts`
4. Run `npm run dev` to start the development server

## AI Recipe Assistant

The application features an AI-powered recipe assistant that can generate recipes based on user input. The recipe assistant can:

- Generate recipes based on dish name and number of servings
- Display ingredients with quantities and estimated prices
- Provide step-by-step cooking instructions
- Allow adding all ingredients to the shopping cart
- Save recipes for future reference

## License

This project is licensed under the MIT License.
