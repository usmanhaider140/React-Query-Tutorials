import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannel = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
const DependentQuery = ({ email }) => {
  const { data: user, isLoading: isUserLoading } = useQuery(
    ["user", email],
    () => fetchUserByEmail(email)
  );
  console.log(user);
  console.log({ user });
  const channelId = user?.data.channelId;

  const { data: channel, isLoading } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannel(channelId),
    {
      enabled: !!channelId,
    }
  );
  console.log({ channel });
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {!isLoading &&
        channel?.data?.courses.map((course, index) => (
          <div key={course + index}>{course}</div>
        ))}{" "}
    </div>
  );
};

export default DependentQuery;
