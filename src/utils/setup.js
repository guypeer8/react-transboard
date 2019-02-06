export function setupTranslations() {
    if (!window.localStorage.getItem('wedband.translations')) {
        window.localStorage.setItem('wedband.translations', JSON.stringify({
            "base": "he",
            "en": {
                "התחבר/י לחשבון שלך": "Login to your account",
                "הצטרפ/י": "Sign Up",
                "צור/צרי חשבון": "Create an account",
                "התחבר/י": "Login",
                "מעולם לא היה קל יותר להזמין הופעה לאיוונט שלך": "We are here to make your event awesome",
                "🎉 ?אז מה חוגגים": "What are we celebrating? 🎉",
                "יאללה": "Let's Go",
                "אמן או נותן שירות? לחץ כאן": "Artist or Service Provider? Press here",
                "התחבר עם פייסבוק": "Login with Facebook",
                "או באמצעות אימייל": "Or Email",
                "מייל": "E-Mail",
                "שם מלא": "Full   Name",
                "סיסמא": "Password",
                "וודא/י סיסמא": "Confirm Password",
                "אתֿ/ה כבר משלנו?": "Already have an account?",
                "חדש/ה אצלנו?": "New to use?",
                "ראשי": "Main",
                "קצת עלינו": "About",
                "התחברות": "Login",
                "דלג פנימה": "Hop In"
            },
            "es": {
                "ראשי": "Principal",
                "קצת עלינו": "De Nosotros",
                "התחברות": "Iniciar sesión",
                "דלג פנימה": "Entrar",
                "מעולם לא היה קל יותר להזמין הופעה לאיוונט שלך": " Nunca ha sido tan fácil pedir un espectáculo para tu avant",
                "🎉 ?אז מה חוגגים": "Que celebremos?  🎉",
                "יאללה": "Vamos",
                "אמן או נותן שירות? לחץ כאן": " Artista o proveedor de servicios? Haga click aqui",
                "צור/צרי חשבון": "Crear cuenta",
                "התחבר/י": "Iniciar sesión",
                "התחבר עם פייסבוק": "Conectate con Facebook",
                "או באמצעות אימייל": " O por correo electrónico",
                "מייל": "Correo electronico",
                "שם מלא": "Tu Nombre",
                "סיסמא": "Contraseña",
                "וודא/י סיסמא": "Verifica tu contraseña",
                "אתֿ/ה כבר משלנו?": "¿Ya eres tú?",
                "התחבר/י לחשבון שלך": "Conectate a tu cuenta",
                "הצטרפ/י": "Unirse",
                "חדש/ה אצלנו?": "¿Nuevo para nosotros?"
            },
        }));
    }
}