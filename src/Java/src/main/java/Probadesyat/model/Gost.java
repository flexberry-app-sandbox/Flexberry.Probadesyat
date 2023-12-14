package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Гость
 */
@Entity(name = "IISProbadesyatГость")
@Table(schema = "public", name = "Гость")
public class Gost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ДанныеПаспорта")
    private Integer данныепаспорта;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "ДатаРождения")
    private Date датарождения;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Karta")
    @Convert("Karta")
    @Column(name = "Карта", length = 16, unique = true, nullable = false)
    private UUID _kartaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Karta", insertable = false, updatable = false)
    private Karta karta;


    public Gost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getДанныеПаспорта() {
      return данныепаспорта;
    }

    public void setДанныеПаспорта(Integer данныепаспорта) {
      this.данныепаспорта = данныепаспорта;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }


}