import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8000'], // Allow frontend origin
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Handle preflight requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin as string || '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

// Simple in-memory storage for demonstration
const textbookContent = [
  {
    title: "Introduction to Radiology",
    content: "Radiology is a medical specialty that uses medical imaging to diagnose and treat diseases within the body. Common imaging techniques include X-rays, CT scans, MRI, ultrasound, and nuclear medicine procedures."
  },
  {
    title: "X-Ray Imaging",
    content: "X-ray imaging uses electromagnetic radiation to create images of the inside of the body. It is particularly useful for examining bones and detecting fractures, infections, and tumors."
  },
  {
    title: "CT Scanning",
    content: "Computed Tomography (CT) uses X-rays to create detailed cross-sectional images of the body. It provides more detail than regular X-rays and is useful for examining soft tissues, blood vessels, and bones."
  },
  {
    title: "MRI Imaging",
    content: "Magnetic Resonance Imaging (MRI) uses magnetic fields and radio waves to create detailed images of organs and tissues. It is particularly useful for examining the brain, spinal cord, and joints."
  },
  {
    title: "Ultrasound",
    content: "Ultrasound uses high-frequency sound waves to create images of structures within the body. It is commonly used during pregnancy to monitor fetal development and to examine organs like the heart and kidneys."
  },
  {
    title: "Nuclear Medicine",
    content: "Nuclear medicine uses small amounts of radioactive material to diagnose and treat various diseases. Techniques include PET scans and SPECT scans."
  },
  {
    title: "Interventional Radiology",
    content: "Interventional radiology uses imaging guidance to perform minimally invasive procedures for diagnosis and treatment. Examples include biopsies and angioplasty."
  }
];

// Function to generate simulated responses based on the question
function generateSimulatedResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();

  // Check for specific topics in the question
  if (lowerQuestion.includes('what is radiology') || lowerQuestion.includes('define radiology')) {
    return "Radiology is a medical specialty that uses medical imaging to diagnose and treat diseases within the body. Common imaging techniques include X-rays, CT scans, MRI, ultrasound, and nuclear medicine procedures.";
  } else if (lowerQuestion.includes('x-ray') || lowerQuestion.includes('x ray')) {
    return "X-ray imaging uses electromagnetic radiation to create images of the inside of the body. It is particularly useful for examining bones and detecting fractures, infections, and tumors. X-rays are the most common form of medical imaging.";
  } else if (lowerQuestion.includes('ct') || lowerQuestion.includes('computed tomography')) {
    return "Computed Tomography (CT) uses X-rays to create detailed cross-sectional images of the body. It provides more detail than regular X-rays and is useful for examining soft tissues, blood vessels, and bones. CT scans are particularly valuable for detecting cancer, cardiovascular disease, and internal injuries.";
  } else if (lowerQuestion.includes('mri') || lowerQuestion.includes('magnetic resonance')) {
    return "Magnetic Resonance Imaging (MRI) uses magnetic fields and radio waves to create detailed images of organs and tissues. It is particularly useful for examining the brain, spinal cord, and joints. Unlike X-rays and CT scans, MRI does not use ionizing radiation.";
  } else if (lowerQuestion.includes('ultrasound') || lowerQuestion.includes('sonography')) {
    return "Ultrasound uses high-frequency sound waves to create images of structures within the body. It is commonly used during pregnancy to monitor fetal development and to examine organs like the heart and kidneys. Ultrasound is safe and does not use radiation.";
  } else if (lowerQuestion.includes('nuclear') || lowerQuestion.includes('pet') || lowerQuestion.includes('spect')) {
    return "Nuclear medicine uses small amounts of radioactive material to diagnose and treat various diseases. Techniques include PET (Positron Emission Tomography) scans and SPECT (Single Photon Emission Computed Tomography) scans. These scans can show organ function and metabolism.";
  } else if (lowerQuestion.includes('interventional')) {
    return "Interventional radiology uses imaging guidance to perform minimally invasive procedures for diagnosis and treatment. Examples include biopsies, angioplasty, stent placement, and embolization procedures. These procedures often have shorter recovery times than traditional surgery.";
  } else if (lowerQuestion.includes('difference') || lowerQuestion.includes('compare')) {
    return "Different imaging modalities have specific uses: X-rays are best for bones, CT provides detailed cross-sectional images using radiation, MRI offers excellent soft tissue contrast without radiation, and ultrasound is safe for monitoring pregnancies. The choice depends on the clinical question and patient factors.";
  } else {
    // If no specific match, search for relevant content
    const relevantItems = textbookContent.filter(item =>
      item.title.toLowerCase().includes(lowerQuestion) ||
      item.content.toLowerCase().includes(lowerQuestion)
    );

    if (relevantItems.length > 0) {
      const item = relevantItems[0]; // Take the first match
      return `Based on the textbook content:\n\n${item.title}: ${item.content}\n\nFor more detailed information, please refer to the relevant section of the radiology textbook.`;
    } else {
      // If no match, provide a general response
      return `I can provide information about various radiology topics including:\n- X-ray imaging and its applications\n- CT scanning techniques and uses\n- MRI technology and safety considerations\n- Ultrasound applications in medicine\n- Nuclear medicine procedures\n- Interventional radiology techniques\n\nPlease ask a more specific question about any of these topics for detailed information.`;
    }
  }
}

// Chatbot endpoint
app.post('/api/chatbot/ask', async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Simple search to find relevant content
    const relevantContent = textbookContent.filter(item =>
      item.title.toLowerCase().includes(question.toLowerCase()) ||
      item.content.toLowerCase().includes(question.toLowerCase())
    );

    // Generate simulated response
    const answer = generateSimulatedResponse(question);

    res.status(200).json({
      message: 'Answer generated successfully',
      question: question,
      answer: answer,
      contextUsed: relevantContent.length > 0, // Indicate if context was used
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({
      error: 'Internal server error in chatbot service',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Chatbot service is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Radiology Chatbot server is running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
  console.log(`Chat endpoint: http://localhost:${port}/api/chatbot/ask`);
});

export default app;