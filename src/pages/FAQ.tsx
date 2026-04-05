import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const faqs = [
  {
    question: "How does Horaion's AI scheduling work?",
    answer:
      "Horaion uses advanced machine learning algorithms to analyse your constraints, preferences, and historical data. It then generates optimal schedules in seconds, automatically resolving conflicts and balancing workloads across your team.",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "Most teams are up and running within a day. Our onboarding team will guide you through the initial configuration, and our platform is designed to integrate seamlessly with the tools you already use.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, absolutely. There are no long-term commitments. You can cancel your subscription at any time from your account settings, and you won't be charged beyond your current billing period.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          color="white"
          fontWeight={700}
          align="center"
          sx={{ mb: 2 }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="rgba(255,255,255,0.7)"
          sx={{ mb: 8, lineHeight: 1.6, maxWidth: 560, mx: "auto" }}
        >
          Can't find what you're looking for? Feel free to{" "}
          <Box
            component="a"
            href="/contact"
            sx={{
              color: "white",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              "&:hover": { opacity: 0.75 },
            }}
          >
            reach out to us
          </Box>
          .
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, index) => {
            const panel = `panel${index}`;
            return (
              <Accordion
                key={panel}
                expanded={expanded === panel}
                onChange={handleChange(panel)}
                elevation={0}
                sx={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px !important",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": {
                    background: "rgba(255,255,255,0.12)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "white" }} />}
                  sx={{ px: 3, py: 1 }}
                >
                  <Typography
                    fontWeight={600}
                    color="white"
                    sx={{ fontSize: "1rem" }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography
                    color="rgba(255,255,255,0.7)"
                    sx={{ lineHeight: 1.8 }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
