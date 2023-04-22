import React, { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pl.js";

interface Exam {
  type: string;
  date: string;
  time?: string;
  additionalInfo?: string;
  summary?: string[];
}
const RenderExams = ({ subject }: { subject: Exam[] }) => {
  dayjs.extend(relativeTime).locale("pl");

  return (
    <ul>
      {subject.map((exam, index) => (
        <RenderExam key={index} exam={exam} />
      ))}
    </ul>
  );
};

const RenderExam = ({ exam }: { exam: Exam }) => {
  let hasTime = !!exam.time;

  const [dayjsDate] = useState<Dayjs>(
    dayjs(hasTime ? `${exam.date} ${exam.time}` : exam.date)
  );

  return (
    dayjsDate && (
      <li>
        <b>{exam.type}</b> -{" "}
        {hasTime
          ? dayjsDate.format("D MMMM YYYY, dddd, HH:mm")
          : dayjsDate.format("D MMMM YYYY")}{" "}
        {exam.additionalInfo && <span>({exam.additionalInfo})</span>} &rarr;{" "}
        <i className="text-gray-400">{dayjsDate.fromNow()}</i>
        {exam.summary && (
          <ol>
            {exam.summary.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ol>
        )}
      </li>
    )
  );
};
export default RenderExams;
