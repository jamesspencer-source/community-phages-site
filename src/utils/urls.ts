export function withBase(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  return `${normalizedBase}${path}`;
}

export function withoutBase(path: string) {
  const base = import.meta.env.BASE_URL ?? '/';
  if (base === '/') return path;

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  return path.startsWith(normalizedBase) ? path.slice(normalizedBase.length) || '/' : path;
}

export function mailto(email: string, subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
