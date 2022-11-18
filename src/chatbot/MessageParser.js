import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercase = message.toLowerCase();

    if (
      lowercase.includes("hello") ||
      lowercase.includes("hi") ||
      lowercase.includes("menu") 
    ) {
      actions.handleMainMessage();
    } else if (message.includes("1")) {
      actions.handle1();
    } else if (message.includes("2")) {
      actions.handle2();
    } else if (message.includes("3")) {
      actions.handle3();
    } else if (message.includes("4")) {
      actions.handle4();
    } else if (message.includes("5")) {
      actions.handle5();
    }
    // --------------------------------------------------------
    else if (lowercase.includes("vmaths")) {
      actions.handleVMaths();
    } else if (lowercase.includes("vphysics")) {
      actions.handleVPhysics();
    } else if (lowercase.includes("venglish")) {
      actions.handleVEnglish();
    } else if (lowercase.includes("vchemistry")) {
      actions.handleVChemistry();
    } else if (lowercase.includes("vbiology")) {
      actions.handleVBiology();
    }
    // -----------------------------------------------
    else if (lowercase.includes("vmdate")) {
      actions.handleVMathsDownload();
    } else if (lowercase.includes("vpdate")) {
      actions.handleVPhysicsDownload();
    } else if (lowercase.includes("vedate")) {
      actions.handleVEnglishDownload();
    } else if (lowercase.includes("vcdate")) {
      actions.handleVChemistryDownload();
    } else if (lowercase.includes("vbdate")) {
      actions.handleVBiologyDownload();
    }

    // -----------------------------------------------
    // test result
    else if (lowercase.includes("testrm")) {
      actions.handleTestRM();
    } else if (lowercase.includes("testrp")) {
      actions.handleTestRP();
    } else if (lowercase.includes("testre")) {
      actions.handleTestRE();
    } else if (lowercase.includes("testrc")) {
      actions.handleTestRC();
    } else if (lowercase.includes("testrb")) {
      actions.handleTestRB();
    }

    // ----------------------------------------------
    // feedback
    else if (lowercase.includes("tfm")) {
      actions.handleTeacherFeedbackM();
    } else if (lowercase.includes("tfp")) {
      actions.handleTeacherFeedbackP();
    } else if (lowercase.includes("tfe")) {
      actions.handleTeacherFeedbackE();
    } else if (lowercase.includes("tfc")) {
      actions.handleTeacherFeedbackC();
    } else if (lowercase.includes("tfb")) {
      actions.handleTeacherFeedbackB();
    }

    // -------------------------------------------
    // doubt solving
    else if (lowercase.includes("dsm")) {
      actions.handleDoubtSolvingM();
    } else if (lowercase.includes("dsp")) {
      actions.handleDoubtSolvingP();
    } else if (lowercase.includes("dse")) {
      actions.handleDoubtSolvingE();
    } else if (lowercase.includes("dsc")) {
      actions.handleDoubtSolvingC();
    } else if (lowercase.includes("dsb")) {
      actions.handleDoubtSolvingB();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
