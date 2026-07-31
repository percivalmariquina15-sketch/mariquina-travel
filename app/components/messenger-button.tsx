import { MessengerIcon } from "./icons";

export default function MessengerButton() {
  return (
    <a
      href="https://www.messenger.com/t/256559060865144"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on Messenger"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
    >
      <MessengerIcon className="h-6 w-6" />
    </a>
  );
}
