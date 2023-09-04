import { Location, Website, Twitter, Company } from "../components/icons";
import { formatUrl } from "../utils";

const DEFAULT_USER_DATA = {
  avatar_url: "/avatar.svg",
  name: "The Octocat",
  login: "octocat",
  html_url: "https://github.com/octocat",
  created_at: "2011-01-25T18:44:36Z",
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
  public_repos: 8,
  followers: 3938,
  following: 9,
  location: "San Francisco",
  blog: "https://github.blog",
  twitter_username: null,
  company: "@github",
};

const API_ENDPOINT = "https://api.github.com/users/";
const GOOGLE_API_ENDPOINT = "https://www.google.com/maps/search/?api=1&query=";
const TWITTER_URL = "https://twitter.com/";
const GITHUB_URL = "https://github.com/";

const STATS = ["repos", "followers", "following"];

const className = (info) => `contact-info ${!info && "not-available"}`;
const text = (info) => info || "Not Available";

const CONTACT_DETAILS = [
  {
    Icon: Location,
    key: "location",
    className,
    href: (info) =>
      info ? `${GOOGLE_API_ENDPOINT}${encodeURIComponent(info)}` : "",
    text,
  },
  {
    Icon: Website,
    key: "website",
    className,
    href: (info) => (info ? formatUrl(info) : ""),
    text,
  },
  {
    Icon: Twitter,
    key: "twitter",
    className,
    href: (info) => (info ? `${TWITTER_URL}${info}` : ""),
    text: (info) => (info ? `@${info}` : "Not Available"),
  },
  {
    Icon: Company,
    key: "company",
    className,
    href: (info) => (info ? `${GITHUB_URL}${info.slice(1)}` : ""),
    text,
  },
];

export { DEFAULT_USER_DATA, API_ENDPOINT, STATS, CONTACT_DETAILS };
