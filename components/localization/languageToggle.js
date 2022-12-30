import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
export default function LanguageToggle() {
    const router = useRouter();

    /// You will need to update this map for any other languages you want to support
    const languages = {
        en: 'English',
        fr: 'Français',
        de: 'Deutsch',
        es: 'Español',
        it: 'Italiano',
        pt: 'Português',
    };

    const onToggleLanguageClick = (newLocale) => {
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div>
            {Object.keys(languages).map((l) => (
                <button type='submit' key={l} onClick={() => onToggleLanguageClick(l)} >{languages[l]}</button>
            ))}
        </div>
    )
};