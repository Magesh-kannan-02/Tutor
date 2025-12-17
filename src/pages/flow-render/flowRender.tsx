import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FLOW, type StepKey } from "@/utils/constants";
import { useFlowStore } from "@/store/flow";

export const FlowRenderer = () => {
  const { stepIndex, pageIndex, goTo } = useFlowStore();
  const navigate = useNavigate();
  const location = useLocation();

  const internalNav = useRef(false);

  const COMPONENTS: Record<StepKey, Record<string, React.ReactNode>> = {
    onboarding: {
      
    },
    feedback: {},
    report: {
        
    },
  };

  const step = FLOW[stepIndex];
  const page = step.pages[pageIndex];

 
  useEffect(() => {
    const stepIdx = FLOW.findIndex((s) => s.path === location.pathname);
    if (stepIdx === -1) return;

    if (stepIdx !== stepIndex) {
      internalNav.current = true; 
      goTo(FLOW[stepIdx].key);
    }
  }, [location.pathname]);

 
  useEffect(() => {
    const path = FLOW[stepIndex].path;
    if (location.pathname !== path && !internalNav.current) {
      navigate(path);
    }

    internalNav.current = false; 
  }, [stepIndex]);

  return COMPONENTS[step.key][page] || null;
};
