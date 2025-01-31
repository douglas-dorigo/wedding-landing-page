import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./EmailForm.module.css";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [guests, setGuests] = useState("0");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      attendance,
      guests,
      message,
    };

    emailjs
      .send(
        "service_regttel",
        "template_wipqf2a",
        templateParams,
        "holHoqVevUZaCLF2s",
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => console.error("Erro:", error));
  };

  return (
    <div className={styles.rsvpContainer}>
      <h2>Confirme sua Presença</h2>
      {submitted ? (
        <p className={styles.successMessage}>
          Obrigado por confirmar sua presença!
        </p>
      ) : (
        <form className={styles.rsvpForm} onSubmit={handleSubmit}>
          <label>Nome Completo</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Você irá comparecer?</label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={attendance === "yes"}
                onChange={(e) => setAttendance(e.target.value)}
              />{" "}
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={attendance === "no"}
                onChange={(e) => setAttendance(e.target.value)}
              />{" "}
              Não
            </label>
          </div>

          {attendance === "yes" && (
            <>
              <label>Quantidade de Acompanhantes</label>
              <input
                type="number"
                min="0"
                placeholder="Número de acompanhantes"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </>
          )}

          <label>Mensagem (opcional)</label>
          <textarea
            placeholder="Deixe uma mensagem para os noivos"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Confirmar</button>
        </form>
      )}
    </div>
  );
}
