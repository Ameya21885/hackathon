import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleMainMessage = () => {
    const botMessage = createChatBotMessage(
      "Hi! I'm ExcitementBot",
      {
        widget: "start",
        payload: {}, // any value I want to send to the given widget or message
        delay: 1000,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
  
  
  const handle1 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject for which you are requesting the video lectures for: ",
      {
        widget: "subject",
        payload: {type: 'video lectures'}, // any value I want to send to the given widget or message
        delay: 1000,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handle2 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject for which you are requesting the test results for: ",
      {
        widget: "subject",
        payload: {type: 'test result'}, // any value I want to send to the given widget or message
        delay: 1000,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle3 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject of the teachure of whom you want to give the feedback to: ",
      {
        widget: "subject",
        payload: {type: 'teacher feedback'}, // any value I want to send to the given widget or message
        delay: 1000,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handle4 = () => {
    const botMessage = createChatBotMessage(
      "Please select the subject of the doubt you want to get solved: ",
      {
        widget: "subject",
        payload: {type: 'doubt'}, // any value I want to send to the given widget or message
        delay: 1000,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // student information
  const handle5 = () => {
    const botMessage = createChatBotMessage("5 Student Information", {
      widget: "studentinformation",
      payload: {type: 'student information'}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // -----------------------------------------------------------
  // video lectures
  const handleVMaths = () => {
    const botMessage = createChatBotMessage("VMaths", {
      widget: "videolecturedate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVPhysics = () => {
    const botMessage = createChatBotMessage("VPhysics", {
      widget: "videolecturedate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVEnglish = () => {
    const botMessage = createChatBotMessage("VEnglish", {
      widget: "videolecturedate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVChemistry = () => {
    const botMessage = createChatBotMessage("VChemistry", {
      widget: "videolecturedate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVBiology = () => {
    const botMessage = createChatBotMessage("VBiology", {
      widget: "videolecturedate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ------------------------------------------------
  const handleVMathsDownload = () => {
    const botMessage = createChatBotMessage("VMathsDownload", {
      widget: "videolecturedownload",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVPhysicsDownload = () => {
    const botMessage = createChatBotMessage("VPhysicsDownload", {
      widget: "videolecturedownload",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVEnglishDownload = () => {
    const botMessage = createChatBotMessage("VEnglishDownload", {
      widget: "videolecturedownload",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVChemistryDownload = () => {
    const botMessage = createChatBotMessage("VChemistryDownload", {
      widget: "videolecturedownload",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVBiologyDownload = () => {
    const botMessage = createChatBotMessage("VBiologyDownload", {
      widget: "videolecturedownload",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // -----------------------------------------------------------
  // test result
  const handleTestRM = () => {
    const botMessage = createChatBotMessage(
      "Please select the date of the Maths test of which you want to see your results for: ",
      {
        widget: "testresultdate",
        payload: {}, // any value I want to send to the given widget or message
        delay: 1000,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTestRP = () => {
    const botMessage = createChatBotMessage("TestResultPhysics", {
      widget: "testresultdate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTestRE = () => {
    const botMessage = createChatBotMessage("TestResultEnglish", {
      widget: "testresultdate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTestRC = () => {
    const botMessage = createChatBotMessage("TestResultChemistry", {
      widget: "testresultdate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTestRB = () => {
    const botMessage = createChatBotMessage("TestResultBiology", {
      widget: "testresultdate",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ----------------------------------------------
  // teacher feedback
  const handleTeacherFeedbackM = () => {
    const botMessage = createChatBotMessage("TeacherFeedback Maths", {
      widget: "teacherfeedback",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTeacherFeedbackP = () => {
    const botMessage = createChatBotMessage("TeacherFeedback Physics", {
      widget: "teacherfeedback",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTeacherFeedbackE = () => {
    const botMessage = createChatBotMessage("TeacherFeedback English", {
      widget: "teacherfeedback",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTeacherFeedbackC = () => {
    const botMessage = createChatBotMessage("TeacherFeedback Chemistry", {
      widget: "teacherfeedback",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTeacherFeedbackB = () => {
    const botMessage = createChatBotMessage("TeacherFeedback Biology", {
      widget: "teacherfeedback",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // ----------------------------------------------
  // doubt solving

  const handleDoubtSolvingM = () => {
    const botMessage = createChatBotMessage("DoubtSolving Maths", {
      widget: "doubtSolving",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoubtSolvingP = () => {
    const botMessage = createChatBotMessage("DoubtSolving Physics", {
      widget: "doubtSolving",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoubtSolvingE = () => {
    const botMessage = createChatBotMessage("DoubtSolving English", {
      widget: "doubtSolving",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoubtSolvingC = () => {
    const botMessage = createChatBotMessage("DoubtSolving Chemistry", {
      widget: "doubtSolving",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoubtSolvingB = () => {
    const botMessage = createChatBotMessage("DoubtSolving Biology", {
      widget: "doubtSolving",
      payload: {}, // any value I want to send to the given widget or message
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMainMessage,
            handle1,
            handle2,
            handle3,
            handle4,
            handle5,
            handleVMaths,
            handleVPhysics,
            handleVEnglish,
            handleVChemistry,
            handleVBiology,
            handleVMathsDownload,
            handleVPhysicsDownload,
            handleVEnglishDownload,
            handleVChemistryDownload,
            handleVBiologyDownload,
            handleTestRM,
            handleTestRP,
            handleTestRE,
            handleTestRC,
            handleTestRB,
            handleTeacherFeedbackM,
            handleTeacherFeedbackP,
            handleTeacherFeedbackE,
            handleTeacherFeedbackC,
            handleTeacherFeedbackB,
            handleDoubtSolvingM,
            handleDoubtSolvingP,
            handleDoubtSolvingE,
            handleDoubtSolvingC,
            handleDoubtSolvingB,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
