import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="my-3 mb-4">
        <h2>About iNotebook</h2>
        <p>Welcome to iNotebook, your digital companion for organized note-taking
          and seamless productivity. We're excited to introduce you to our
          note-taking web application and the team behind it.</p>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p style={{ textAlign: "justify" }}>
            At iNotebook, our mission is to empower individuals and teams to
          capture, organize, and access their thoughts, ideas, and information
          effortlessly. We believe that effective note-taking is the foundation
          of productivity, creativity, and personal growth.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
          <li>Streamlined Note-Taking</li>
          <li>Organization Made Easy</li>
          <li>Notes on cloud</li>
          <li>Collaboration</li>
          <li>Privacy and Security</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Join us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p style={{ textAlign: "justify" }}>
          Today Join the iNotebook community and experience a smarter way to
          take notes. Whether you're a student, professional, or simply someone
          who loves jotting down their ideas, iNotebook is here to simplify
          and enhance your note-taking journey. Get started today and unlock the
          power of organized, accessible, and secure note-taking with
          iNotebook!
        </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
   
   
      {!localStorage.getItem("token") && (
          <div className="mt-4">
            {" "}
            <h2>Get Started</h2>
            <p>
              Ready to take control of your notes and boost your productivity?
              Get started with iNotebook today! Sign up for a free account and
              start organizing your thoughts like never before.
            </p>
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>{" "}
          </div>

        )}
        
      

    </div>
  );
}