import ChannelNav from "../../components/ChannelNav/ChannelNav";
import Bell from "../../components/Img/icons/Bell";
import UserIcon from "../../components/Img/icons/User";
import SubscribeButton from "../../components/SubscribeButton/SubscribeButton";

import "./Channel.css";

const Channel = () => {
  return (
    <section className="channel">
      <img
        className="channel__banner"
        src={"https://via.placeholder.com/1595x280"}
        alt=""
        width={1595}
        height={280}
      />

      <div className="channel__top">
        <div className="channel__top__inner">
          <UserIcon className="channel__top__avatar" width={80} height={80} />

          <div className="channel__top__info">
            <h2 className="channel__top__heading">Dollie Blair</h2>

            <span className="channel__top__text">245K subscribed</span>
          </div>
        </div>

        <div className="channel__top__right">
          <button className="channel__top__button">
            <Bell />
          </button>

          <SubscribeButton />
        </div>
      </div>

      <div className="channel__hero">
        <div className="channel__hero__left">
          <ChannelNav />
        </div>
      </div>
    </section>
  );
};

export default Channel;
