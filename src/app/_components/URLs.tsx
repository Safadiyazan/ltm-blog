type Props = {
    URL: string;
    picture: string;
  };
  
  const URLs = ({ URL, picture }: Props) => {
    return (
      <div className="flex items-center">
        <Link href={URL} aria-label="Link">
          <img src={picture} className="w-12 h-12 rounded-full mr-4" alt="Link" />
        </Link>
      </div>
    );
  };
  
  export default URLs;
  