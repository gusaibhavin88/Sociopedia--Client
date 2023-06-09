import { Modal } from "@mantine/core";
import styles from "../styles/profilemodel.module.css";
import { useState } from "react";
import { updateUser } from "@/redux/API/userrequest";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/action/useraction";
import { uploadImage } from "@/redux/API/uploadrequest";

function ProfileModel(props) {
  const user = useSelector((state) => state.auth.user);
  const [profileImage, setprofileImage] = useState("");
  const [coverImage, setcoverImage] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [modeldata, setmodeldata] = useState({
    _id: user._id,
  });

  const handleChange = (e) => {
    setmodeldata({ ...modeldata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (profileImage) {
      const imageFile = new FormData();
      const fileName = `${user._id}_Profile`;
      imageFile.append("name", fileName);
      imageFile.append("image", profileImage);
      try {
        uploadImage(user._id, imageFile);
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImage) {
      const imageFile = new FormData();
      const fileName = `${user._id}_Cover`;
      imageFile.append("name", fileName);
      imageFile.append("image", coverImage);
      try {
        uploadImage(user._id, imageFile);
      } catch (error) {
        console.log(error);
      }
    }
    await updateUser(id, modeldata);

    setTimeout(() => {
      dispatch(getProfile(user._id));
    }, 4000);

    props.setprofileform();
    setprofileImage("");
    setcoverImage("");
  };

  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = await e.target.files[0];
      if (img) {
        e.target.name === "profileImage"
          ? setprofileImage(img)
          : setcoverImage(img);
      }
    }
  };

  return (
    <>
      <Modal
        opened={props.profileform}
        onClose={() => props.setprofileform()}
        size="55%"
      >
        <div className={styles.signup}>
          <h1>Profile Info</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.forminput}>
              <input
                type="status"
                name="relationship"
                placeholder="Relationship Status"
                onChange={handleChange}
              />
              <input
                type="livesin"
                name="livesin"
                placeholder="Lives At"
                onChange={handleChange}
              />
            </div>
            <div className={styles.forminput}>
              <input
                type="workat"
                name="worksAt"
                id=""
                placeholder="Work At"
                onChange={handleChange}
              />
              <input
                type="country"
                name="country"
                id=""
                placeholder="Country"
                onChange={handleChange}
              ></input>
            </div>
            <div className={styles.forminputfile}>
              <span>
                {" "}
                Cover <br />
                Image
              </span>
              <input
                type="file"
                placeholder="Cover Image"
                name="coverImage"
                onChange={onImageChange}
                accept="image/*"
                disabled={profileImage ? true : false}
              />
              <span>
                {" "}
                Profile <br /> Image
              </span>

              <input
                type="file"
                name="profileImage"
                disabled={coverImage ? true : false}
                onChange={onImageChange}
                accept="image/*"
              />
            </div>
            <span
              style={{
                color: "red",
                alignSelf: "center",
                display: `${profileImage || coverImage ? "flex" : "none"}`,
              }}
            >
              Only coverimage or profileimage can be changed at a time.
            </span>
            <button type="submit" style={{ cursor: "pointer" }}>
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ProfileModel;
