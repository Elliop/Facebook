import StoryCard from "./StoryCard";

function Stories() {
  const stories = [
    {
      name: "Elliop Sh",
      src: "/MyStory.jpeg",
      profile: "/Me.jpeg",
    },
    {
      name: "1337",
      src: "/1337Story.jpeg",
      profile: "/1337.jpeg",
    },
    {
      name: "42",
      src: "/42Story.jpeg",
      profile: "/42.jpeg",
    },
    {
      name: "Elon Musk",
      src: "/ElonStory.jpeg",
      profile: "/Elon.jpeg",
    },
    {
      name: "Bill Gates",
      src: "/BillStory.jpeg",
      profile: "/Bill.png",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
