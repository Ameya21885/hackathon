import { createChatBotMessage } from "react-chatbot-kit";
import Start from "../component/start/Start";
import Subject from "../component/subject/Subject";
import TestResultDate from "../component/testResult/TestResultDate";
import VideoLectureDate from "../component/vdate/VideoLectureDate";
import VideoLectureDownload from "../component/vdate/VideoLectureDownload";
import TeacherFeedback from "../component/teacherFeedback/TeacherFeedback";
import DoubtSolving from "../component/doubtSolving/DoubtSolving";
import StudentInformation from "../component/studentInformation/StudentInformation";

const botName = "ExcitementBot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`, {
      widget: "start",
      payload: {}, // any value I want to send to the given widget or message
      delay: 500,
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state: {
    start: [],
    subject: [],
    videolecturedate: [],
    videovecturedownload: [],
    testresultdate: [],
    teacherfeedback: [],
    studentinformation: [],
  },
  widgets: [
    {
      widgetName: "start",
      widgetFunc: (props) => <Start {...props} />,
      mapStateToProps: ["start"],
    },
    {
      widgetName: "subject",
      widgetFunc: (props) => <Subject {...props} />,
      mapStateToProps: ["subject"],
    },
    {
      widgetName: "videolecturedate",
      widgetFunc: (props) => <VideoLectureDate {...props} />,
      mapStateToProps: ["videolecturedate"],
    },
    {
      widgetName: "videolecturedownload",
      widgetFunc: (props) => <VideoLectureDownload {...props} />,
      mapStateToProps: ["videolecturedownload"],
    },
    {
      widgetName: "testresultdate",
      widgetFunc: (props) => <TestResultDate {...props} />,
      mapStateToProps: ["testresultdate"],
    },
    {
      widgetName: "teacherfeedback",
      widgetFunc: (props) => <TeacherFeedback {...props} />,
      mapStateToProps: ["teacherfeedback"],
    },
    {
      widgetName: "doubtSolving",
      widgetFunc: (props) => <DoubtSolving {...props} />,
      mapStateToProps: ["doubtSolving"],
    },
    {
      widgetName: "studentinformation",
      widgetFunc: (props) => <StudentInformation {...props} />,
      mapStateToProps: ["studentinformation"],
    },
  ],
};

export default config;
