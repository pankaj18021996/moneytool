function buildCanonicalUrl(pathname) {
  if (!pathname) return 'https://www.moneytool.in';

  const normalized = pathname.replace(/\/+$/, '');

  if (normalized === '/calculators' || normalized === '/calculators/') {
    return 'https://www.moneytool.in/calculators';
  }

  if (normalized.startsWith('/calculators/')) {
    const slug = normalized.replace('/calculators/', '');
    return `https://www.moneytool.in/${slug}`;
  }

  return `https://www.moneytool.in${normalized}`;
}

module.exports = { buildCanonicalUrl };
