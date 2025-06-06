import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="font-bold text-sm text-gray-400 pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.youtube.com">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.twitter.com">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
//font-bold text-sm text-gray-400-->faded-text