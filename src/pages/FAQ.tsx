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
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "How can Horaion help control labour costs?",
    answer:
      "Horaion helps teams plan staffing around expected demand, so busy periods are covered without overloading quieter shifts. Better demand matching can reduce unnecessary overtime, last-minute fixes, and avoidable labour spend.",
  },
  {
    question: "Can Horaion help with compliance and workforce rules?",
    answer:
      "Yes. Rest-day expectations, approved leave, role requirements, coverage policies, and contract rules can be reflected in the scheduling process. Managers still review the final roster, but Horaion helps flag plans that may need attention before they reach the floor.",
  },
  {
    question: "How does Horaion improve employee fairness?",
    answer:
      "Horaion can account for availability, leave, preferred shifts, and how preferences were handled in past schedules. This gives managers a more consistent way to balance business needs with employee wellbeing and fairness.",
  },
  {
    question: "Will managers lose control of the roster?",
    answer:
      "No. Horaion gives managers a stronger starting point, not a black-box final answer. Managers can review schedules, understand trade-offs, make adjustments, and decide what gets published.",
  },
  {
    question: "Can Horaion support teams that share staff?",
    answer:
      "Yes. When employees work across departments, locations, or roles, Horaion can account for confirmed commitments elsewhere. This helps reduce double-booking and makes cross-team planning easier for managers.",
  },
  {
    question: "Can Horaion help design better shifts?",
    answer:
      "Yes. Horaion can help propose shift structures around peak hours, business demand, allowed start times, and preferred shift lengths. This helps teams move beyond outdated templates and build shifts that better match how the business actually operates.",
  },
  {
    question: "How does demand forecasting improve planning?",
    answer:
      "Demand forecasting gives leaders a clearer view of future staffing needs before the schedule is built. That helps with labour budgeting, peak-period planning, department-level coverage, and earlier decisions around staffing gaps.",
  },
  {
    question: "What day-to-day problems can Horaion reduce?",
    answer:
      "Horaion is built to reduce common roster problems: uncovered shifts, unnecessary overtime, double-booked staff, uneven preference handling, and repeated manual edits. The aim is a calmer planning cycle and fewer surprises during operations.",
  },
  {
    question: "Can Horaion handle part-time, flexi, or gig workers?",
    answer:
      "Yes. Horaion is designed for workforces where availability changes and coverage needs move quickly. Managers can plan around different availability windows, role requirements, and demand peaks without relying on manual spreadsheet matching.",
  },
  {
    question: "How does leave management connect to scheduling?",
    answer:
      "Approved leave can flow into scheduling so managers do not have to manually reconcile time-off requests against the roster. This helps reduce accidental assignments, back-and-forth approvals, and schedule rework.",
  },
  {
    question: "What does implementation usually involve?",
    answer:
      "The key step is mapping how your operation already works: departments, roles, employee profiles, shift rules, demand patterns, leave policies, and approval workflows. Once that foundation is clear, Horaion can support repeatable planning instead of one-off spreadsheet work.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions</title>
      </Helmet>
      <Box sx={{ py: 10, px: { xs: 3, md: 8 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            color="#FFFCF6"
            fontWeight={700}
            align="center"
            sx={{ mb: 2 }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="#EDECE8"
            sx={{ mb: 8, lineHeight: 1.6, maxWidth: 560, mx: "auto" }}
          >
            Can't find what you're looking for? Feel free to{" "}
            <Box
              component="a"
              href="/contact"
              sx={{
                color: "#FFFCF6",
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
                    expandIcon={<ExpandMore sx={{ color: "#FFFCF6" }} />}
                    sx={{ px: 3, py: 1 }}
                  >
                    <Typography
                      fontWeight={600}
                      color="#FFFCF6"
                      sx={{ fontSize: "1rem" }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography color="#CCDDE8" sx={{ lineHeight: 1.8 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQ;
