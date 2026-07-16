export default function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <div className="container-content text-center">
        <p className="font-mono text-xs text-muted-2">
          Designed &amp; built by Elaine Liang &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
