import React, { useState } from "react";
import styles from "./EmailForm.module.css";
import { sendEmailConfirmation } from "../../utils/emailUtils";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("sim");
  const [guests, setGuests] = useState("0");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmailConfirmation(name, attendance, guests, message).then(() => {
      setSubmitted(true);
    });
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
                value="sim"
                checked={attendance === "sim"}
                onChange={(e) => setAttendance(e.target.value)}
              />{" "}
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="attendance"
                value="nao"
                checked={attendance === "nao"}
                onChange={(e) => setAttendance(e.target.value)}
              />{" "}
              Não
            </label>
          </div>

          {attendance === "sim" && (
            <>
              <label>Quantidade de Acompanhantes</label>
              <input
                type="number"
                min={0}
                max={2}
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
