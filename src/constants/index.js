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

const CONTACT_DETAILS = [
  {
    Icon: Location,
    key: "location",
    className: (info) => `contact-info ${!info && "not-available"}`,
    href: (info) =>
      info ? `${GOOGLE_API_ENDPOINT}${encodeURIComponent(info)}` : "",
    text: (info) => info || "Not Available",
  },
  {
    Icon: Website,
    key: "website",
    className: (info) => `contact-info ${!info && "not-available"}`,
    href: (info) => (info ? formatUrl(info) : ""),
    text: (info) => info || "Not Available",
  },
  {
    Icon: Twitter,
    key: "twitter",
    className: (info) => `contact-info ${!info && "not-available"}`,
    href: (info) => (info ? `${TWITTER_URL}${info}` : ""),
    text: (info) => (info ? `@${info}` : "Not Available"),
  },
  {
    Icon: Company,
    key: "company",
    className: (info) => `contact-info ${!info && "not-available"}`,
    href: (info) => (info ? `${GITHUB_URL}${info.slice(1)}` : ""),
    text: (info) => info || "Not Available",
  },
];

export { DEFAULT_USER_DATA, API_ENDPOINT, STATS, CONTACT_DETAILS };
