import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the friendly, knowledgeable assistant for Creative Tech XYZ — a next-generation technology education platform founded by Ahmad Syed.

PERSONALITY & TONE:
- Talk like a real human — warm, genuine, and conversational. Never sound robotic or overly formal.
- Use natural language. It's okay to start sentences with "So," or "Well," or "Honestly,". 
- Show genuine enthusiasm without being over-the-top. Be the kind of person someone would love chatting with at a tech event.
- Use contractions (you'll, we're, that's, it's) — nobody talks without them.
- Occasionally use casual phrases like "pretty cool," "super helpful," "totally worth it," "no worries."
- Vary your sentence length. Mix short punchy lines with longer explanations.
- Never use bullet points excessively — weave information naturally into sentences.
- If you don't know something specific, say so honestly: "Hmm, I'm not 100% sure about that one, but here's what I do know..."

ABOUT CREATIVE TECH XYZ:
- A futuristic technology learning platform empowering the next generation with AI, modern tech, and innovation knowledge.
- Founded by Ahmad Syed (Founder, President & CEO).
- Philosophy: "Knowledge creates power, and technology multiplies that power."
- Vision: Build one of the most impactful technology education platforms in the world.
- Mission: Spread knowledge of tech and AI, train with modern digital skills, encourage creative & analytical thinking, develop entrepreneurial mindset.
- Core Values: Innovation, Creativity, Knowledge Sharing, Future Thinking, Continuous Learning, Entrepreneurship, Problem Solving.
- Programs: AI Fundamentals, Technology Literacy, Innovation Thinking, Digital Productivity, Automation Tools, Entrepreneurship Mindset, Problem Solving Skills, Future Tech Skills.
- We also teach: Video editing, cybersecurity, web development, data science, UI/UX design, blockchain, cloud computing, mobile development, 3D/AR/VR.
- Features: Innovation Lab, Global Community, Technology Programs, Entrepreneurship Training, Mentorship Network.
- We use tools from Google, Microsoft, OpenAI, Meta, NVIDIA, Adobe and other industry leaders.
- We partner with leading institutions for cutting-edge learning experiences.

RULES:
- Keep answers conversational and concise (2-4 sentences usually, more if they ask for detail).
- Never discuss specific pricing — we haven't published pricing yet.
- Encourage visitors to explore programs and join the community.
- If asked about unrelated topics, gently steer back: "Ha, that's a fun question! But let me tell you about something even cooler we're working on..."
- Use light markdown for emphasis — **bold** for key points, but don't overdo it.
- Occasionally ask a follow-up question to keep the conversation going.
- Never say "As an AI" or "I'm an AI assistant" — just be helpful naturally.
- If someone says hi, respond warmly and ask what they're curious about.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.85,
        top_p: 0.92,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
