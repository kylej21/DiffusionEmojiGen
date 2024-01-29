# DiffusionEmojiGen
Diffusion model Neural Network to deploy a custom emoji generator built for IrvineHacks at UCI
# Example 
https://www.youtube.com/watch?v=DzD8RCODXBo
# Setup
1. Install dependencies
2. Unzip our Machine learning Model from backend/routers
3. Make sure you are in the backend directory and run ```python main.py``` (or python3 main.py)
4. In a seperate terminal, navigate to the frontend directory and run ```npm run dev```

Your localhost:3000 should be hosting the page. You can now input a prompt and wait for the image to generate. It usually takes about 15-20 seconds.
# Frontend
The frontend is built with Next.js, Tailwind CSS, and JavaScript
# Backend
We used a FastAPI to set up a python backend. Our backend is intended to host the PyTorch model that we saved from Google Colab
# Model 
We initially used vector embeddings to convert the user prompt into ML readable input. Then, we used a diffusion model to strategically remove noise from images until they share characteristics that resemble the vectors. 
# Challenges 
1. The lack of public emoji data was the biggest issue for training our model. Since there are only about 3000 emojis for the apple Iphone, we only had 3000 images to train our data. This made it very tricky for our model to generalize to prompts that are not related to pre existing emojis.
2. Poor labeling of the emojis caused our model to struggle with color. Regular emojis such as 'happy face' would be labeled "white happy face" if the background was white. Because of this, our model misunderstood the color white.
3. We had difficulty removing the noise from the outside of the emoji. We have not yet debugged why the noise is so vibrant, but that would be one of our next steps. Another temporary solution could be calling an image background removal API before we put the image on the web page. 
