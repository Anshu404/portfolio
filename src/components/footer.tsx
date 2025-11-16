// UPDATED: Changed import path to relative for preview
import { Button } from './button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        {/* UPDATED: Changed link and name to match your resume */}
        <a
          href="https://github.com/Anshu404"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anshu Kumar Mandal
        </a>
      </Button>
      . All rights reserved.
    </footer>
  );
};