import Link from "next/link";

type Props = {
  name: string;
  github_picture: string;
  github_url: string;
  exurl_picture: string;
  ex_url: string;
  doc_picture: string;
  doc_url: string;
};

const Avatar = ({ name, github_picture, github_url, exurl_picture, ex_url, doc_picture, doc_url }: Props) => {
  return (
    <div className="flex items-center">
      <div className="text-xl font-bold"> <h3>  {name}  </h3></div>
      <div className="w-12 h-12 mr-4" />


      {/* External Link & Picture */}
      {ex_url ? (
        <Link href={ex_url} aria-label="ExternalLink">
          <img
            src={exurl_picture}
            className="w-12 h-12 rounded-full mr-4"
            alt="ExternalLink"
          />
        </Link>
      ) : (
        <div className="w-12 h-12 mr-4" /> // Empty space placeholder
      )}

      {/* Document Link & Picture */}
      {doc_url ? (
        <Link href={doc_url} aria-label="DocLink">
          <img
            src={doc_picture}
            className="w-12 h-12 rounded-full mr-4"
            alt="DocLink"
          />
        </Link>
      ) : (
        <div className="w-12 h-12 mr-4" /> // Empty space placeholder
      )}

      {/* GitHub Link & Picture */}
      {github_url ? (
        <Link href={github_url} aria-label="GitHubLink">
          <img
            src={github_picture}
            className="w-12 h-12 rounded-full mr-4"
            alt="GitHubLink"
          />
        </Link>
      ) : (
        <div className="w-12 h-12 mr-4" /> // Empty space placeholder
      )}
    </div>
  );
};

export default Avatar;
