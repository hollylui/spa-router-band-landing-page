import { useParams } from "react-router-dom";

const Members = ({ members }) => {
  const { memberName } = useParams();

  return (
    <div>
      {members
        .filter((member) => member.param === memberName)
        .map((info) => (
          <div key={info.param}>
            <h2 className="m-4">{info.name}</h2>
            <img
              className="memberPic"
              src={`../image/${info.param}.jpg`}
              alt=""
            />
          </div>
        ))}
    </div>
  );
};

export default Members;
