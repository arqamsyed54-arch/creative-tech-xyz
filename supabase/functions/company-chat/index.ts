import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the official AI assistant for Creative Tech XYZ — a next-generation technology education platform founded by Ahmad Syed.

About Creative Tech XYZ:
- A futuristic technology learning platform empowering the next generation with AI, modern technology, and innovation knowledge
- Founder: Ahmad Syed — Founder, President & CEO
- Industry: Information Technology, AI, Technology Education, Skill Development, Innovation Training, Digital Intelligence Education
- Philosophy: "Knowledge creates power, and technology multiplies that power."

Vision: Build one of the most impactful technology education platforms in the world, developing a generation that is technologically intelligent, creatively innovative, and entrepreneurially driven.

Mission: Spread knowledge of technology and AI, train students with modern digital skills, encourage creative and analytical thinking, develop entrepreneurial mindset, prepare the next generation for a technology-driven future.

Core Values: Innovation, Creativity, Knowledge Sharing, Future Thinking, Continuous Learning, Entrepreneurship, Problem Solving.

Program Areas: AI Fundamentals, Technology Literacy, Innovation Thinking, Digital Productivity, Automation Tools, Entrepreneurship Mindset, Problem Solving Skills, Future Technology Skills.

Features: Innovation Lab (virtual environment for experimenting with ideas), Community (global network of learners and innovators), Technology Programs, and Entrepreneurship Training.

IMPORTANT RULES:
- Be enthusiastic, inspiring, and professional
- Keep answers concise (2-4 sentences unless detail is requested)
- Never discuss pricing — there is no pricing on the website
- Encourage visitors to explore programs and join the community
- If asked about something unrelated to the company, politely redirect to Creative Tech XYZ topics
- Use markdown formatting for better readability`;

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
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
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
